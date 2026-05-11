interface ProjectCardProps {
  name: string;
  description: string;
  stack: string;
}

export default function ProjectCard({
  name,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
        {name}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <span className="font-semibold">Foco:</span> {stack}
      </p>
    </div>
  );
}
