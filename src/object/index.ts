export type PickKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
}[keyof Type];

export type OmitKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? never : Key;
}[keyof Type];

export type Nullable<Type> = {
  [Key in keyof Type]: Type[Key] | null;
};

export type NullableKeys<Type, Keys extends keyof Type> = Omit<Type, Keys> & {
  [Key in Keys]: Type[Key] | null;
};
