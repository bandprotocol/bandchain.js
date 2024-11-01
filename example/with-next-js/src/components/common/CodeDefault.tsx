const CodeDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="bg-gray-100 p-5 rounded-lg overflow-auto text-sm text-gray-800 max-h-[400px]">
      <code>{children}</code>
    </pre>
  );
};

export default CodeDefault;
