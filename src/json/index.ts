import { OmitKeys } from "../object";

export interface StringifiedJSON<_Type> extends String {}

export type ParsedJSON<
  Type,
  StrictUndefined = false,
  StrictNumber = false
> = Type extends undefined
  ? StrictUndefined extends true
    ? null
    : undefined
  : Type extends Function | Symbol
  ? null
  : Type extends { toJSON: () => string }
  ? string
  : Type extends string | boolean | null
  ? Type
  : Type extends String
  ? string
  : Type extends Boolean
  ? boolean
  : Type extends number | Number
  ? StrictNumber extends true
    ? number | null
    : number
  : Type extends Array<infer ItemType>
  ? Array<ParsedJSON<ItemType, StrictUndefined, StrictNumber>>
  : Type extends { [Symbol.toStringTag]: string }
  ? {}
  : Type extends {}
  ? {
      [Key in OmitKeys<
        Type,
        StrictUndefined extends true
          ? undefined | Function | Symbol
          : Function | Symbol
      >]: ParsedJSON<Type[Key], StrictUndefined, StrictNumber>;
    }
  : Type;

export function stringify<Type>(
  object: Type
): Type extends undefined | Function | Symbol
  ? undefined
  : StringifiedJSON<Type> {
  // @ts-ignore JSON.stringify actually returns undefined but TypeScript doesn't consider that
  return JSON.stringify(object);
}

export function parse<Type>(json: StringifiedJSON<Type>): ParsedJSON<Type> {
  return JSON.parse(json.toString());
}
