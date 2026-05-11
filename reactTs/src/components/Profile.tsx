interface profileCardProp {
  name: string;
  age?: number;
}

export function Profile({ name, age }: profileCardProp) {
  return (
    <article>
      <h2>{name}</h2>
      <h3>Age: {age}</h3>
    </article>
  );
}
