function ErrorList({ errors }: { errors: string[] }) {
  return (
    <ul className="error">
      {errors.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}

export default ErrorList;
