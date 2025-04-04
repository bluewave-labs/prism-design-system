import Link from 'next/link';

const components = [
  {
    href: '/sidebar',
    title: 'Sidebar',
    description: 'Sidebar with collapsible menu',
  }
]

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-10">Available components</h1>
      <ul>
        {components.map((component) => (
          <li key={component.href} className="mb-4">
          <Link href={component.href} className="block p-4 text-gray-20 rounded-lg hover:underline">
            <h2 className="text-xl font-semibold">{component.title}</h2>
            <p className="text-gray-40">{component.description}</p>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}
