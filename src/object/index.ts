export type PickKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
}[keyof Type];

export type OmitKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? never : Key;
}[keyof Type];
