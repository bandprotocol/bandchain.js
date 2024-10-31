export const ExampleTemplateLayout = ({
  id,
  title,
  exampleChildren,
  resultChildren,
}: {
  id: string;
  title: string;
  exampleChildren: React.ReactNode;
  resultChildren: React.ReactNode;
}) => {
  return (
    <div id={id} className="border-b border-inherit border-solid pb-4 mb-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <span className="text-indigo-600">#</span>
        {title}
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 mb-2">Example Code:</h4>
          {exampleChildren}
        </div>
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 mb-2">Results:</h4>
          {resultChildren}
        </div>
      </div>
    </div>
  );
};
