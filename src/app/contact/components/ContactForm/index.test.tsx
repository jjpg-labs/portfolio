import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactForm from '.';
import '@testing-library/jest-dom';
import { LocaleProvider } from '@/app/context/LocaleContext';

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields and submit button', () => {
    renderWithLocale(<ContactForm />);
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Asunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Enviar Mensaje/i })
    ).toBeInTheDocument();
  });

  it('clears individual field error when typing', async () => {
    renderWithLocale(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));
    const nameInput = screen.getByLabelText(/Nombre/i);
    expect(
      await screen.findByText(/El nombre es requerido/i)
    ).toBeInTheDocument();
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    await waitFor(() => {
      expect(
        screen.queryByText(/El nombre es requerido/i)
      ).not.toBeInTheDocument();
    });
  });

  it('disables inputs and shows loading text when submitting', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true, message: 'ok' }),
      })
    ) as jest.Mock;

    renderWithLocale(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: 'juan@mail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Asunto/i), {
      target: { value: 'Hola' },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: 'Este es un mensaje válido.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));
    expect(screen.getByRole('button', { name: /Enviando/i })).toBeDisabled();
    expect(screen.getByLabelText(/Nombre/i)).toBeDisabled();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeDisabled();
    expect(screen.getByLabelText(/Asunto/i)).toBeDisabled();
    expect(screen.getByLabelText(/Mensaje/i)).toBeDisabled();

    await waitFor(() => {
      expect(
        screen.getByText(/Mensaje enviado con éxito/i)
      ).toBeInTheDocument();
    });
  });

  it('shows error message if API returns error', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: 'fail' }),
      })
    ) as jest.Mock;

    renderWithLocale(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: 'juan@mail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Asunto/i), {
      target: { value: 'Hola' },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: 'Este es un mensaje válido.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hubo un error/i)).toBeInTheDocument();
    });
  });

  it('shows error message if fetch throws', async () => {
    global.fetch = jest.fn(() => Promise.reject('Network error')) as jest.Mock;

    renderWithLocale(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: 'juan@mail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Asunto/i), {
      target: { value: 'Hola' },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: 'Este es un mensaje válido.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hubo un error/i)).toBeInTheDocument();
    });
  });
});
