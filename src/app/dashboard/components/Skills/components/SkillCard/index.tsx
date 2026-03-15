interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  const borderColor = title === 'Back-End'
    ? 'border-blue-600'
    : title === 'Front-End'
    ? 'border-green-600'
    : 'border-yellow-500';

  return (
    <div
      className={`p-6 border-l-4 shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors ${borderColor}`}
    >
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {title}
      </h4>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
