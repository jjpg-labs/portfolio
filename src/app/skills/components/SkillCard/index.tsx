interface Skill {
  name: string;
  level: number;
  category: string;
}

interface LevelLabels {
  expert: string;
  advanced: string;
  intermediate: string;
  basic: string;
}

const DEFAULT_LEVELS: LevelLabels = {
  expert: 'Experto',
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  basic: 'Básico',
};

interface SkillCardProps {
  category: string;
  skills: Skill[];
  levels?: LevelLabels;
}

const getLevelLabel = (
  level: number,
  labels: LevelLabels
): { label: string; className: string } => {
  if (level >= 5)
    return {
      label: labels.expert,
      className:
        'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    };
  if (level >= 4)
    return {
      label: labels.advanced,
      className:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    };
  if (level >= 3)
    return {
      label: labels.intermediate,
      className:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    };
  return {
    label: labels.basic,
    className: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  };
};

const getCategoryAccent = (category: string): string => {
  if (category === 'Front-End') return 'border-green-600 dark:border-green-400';
  if (category === 'Databases' || category === 'Bases de Datos')
    return 'border-yellow-500 dark:border-yellow-300';
  if (category === 'Infrastructure' || category === 'Infraestructura')
    return 'border-purple-500 dark:border-purple-400';
  return 'border-blue-600 dark:border-blue-400';
};

export function SkillCard({ category, skills, levels = DEFAULT_LEVELS }: SkillCardProps) {
  return (
    <div
      className={`p-6 border-l-4 ${getCategoryAccent(category)} shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors`}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        {category}
      </h2>

      <ul className="space-y-4">
        {skills.map((skill) => {
          const { label, className } = getLevelLabel(skill.level, levels);
          return (
            <li
              key={skill.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2"
            >
              <span className="w-full sm:w-1/2 font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span
                className={`mt-1 sm:mt-0 inline-block px-3 py-1 text-xs font-semibold rounded-full ${className}`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
