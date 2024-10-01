export default function ConditionalComponent() {
  const display = false;
  if (display === false) {
    return (
      <div>
        <h3>this is conditional component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>this is conditional component</h3>
        <h3>code everyday</h3>
      </div>
    );
  }
}
