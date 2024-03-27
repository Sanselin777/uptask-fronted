export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-100 text-red-600 p-3 font-bold uppercase text-sm text-center my-4">
      {children}
    </div>
  );
}
