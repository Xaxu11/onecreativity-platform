type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass p-6 rounded-2xl">

      <p className="text-gray-400 mb-3">
        {title}
      </p>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}