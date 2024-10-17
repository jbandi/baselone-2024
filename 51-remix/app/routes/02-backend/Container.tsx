type ContainerProps = { data: string };

export function Container({ data }: ContainerProps) {
  console.log("Rendering Container Component");
  return (
    <div>
      <h2>Display of Container.</h2>
      <h1>{data}</h1>
    </div>
  );
}
