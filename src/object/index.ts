export type PickKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
}[keyof Type];

export type OmitKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? never : Key;
}[keyof Type];

export type NullableKeys<Type, Keys extends keyof Type> = Omit<Type, Keys> & {
  [key in Keys]: Type[Keys] | null;
};
