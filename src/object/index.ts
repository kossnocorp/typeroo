export type ObjectType = object & { length?: never };

export type PickKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
}[keyof Type];

export type OmitKeys<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? never : Key;
}[keyof Type];

export type Nullable<Type> = {
  [Key in keyof Type]: Type[Key] | null;
};

// TODO: Rename keys to something more appropriate, like AlterToNullable
export type NullableKeys<Type, Keys extends keyof Type> = Omit<Type, Keys> & {
  [Key in Keys]: Type[Key] | null;
};

// TODO: Rename keys to something more appropriate, like AlterToPartial
export type PartialKeys<Type, Keys extends keyof Type> = Omit<Type, Keys> & {
  [Key in Keys]?: Type[Key];
};

/**
 * Returns the object keys of `Type` that are not `never`.
 */
export type NonNeverKeys<Type> = {
  [Key in keyof Type]: Type[Key] extends never ? never : Key;
}[keyof Type];

/**
 * Returns the object wihtout the keys of `Type` that are `never`.
 */
export type OmitNever<Type> = Pick<Type, NonNeverKeys<Type>>;
