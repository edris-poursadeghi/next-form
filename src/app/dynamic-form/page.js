import DynamicForm from "../../../components/dynamic-form";

const DynamicFormPage = () => {
  const fields = [
    { input: "text", name: "name", value: "hi edris" },
    { input: "textarea", name: "address", value: "this is my address" },
  ];

  return (
    <div>
      <DynamicForm fields={fields} />
    </div>
  );
};

export default DynamicFormPage;
