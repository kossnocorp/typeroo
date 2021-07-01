import { OmitKeys } from "../object";

export interface StringifiedJSON<_Type> extends String {}

export type ParsedJSON<Type> = Type extends undefined | Function | Symbol
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
  ? number | null
  : Type extends Array<infer ItemType>
  ? Array<ParsedJSON<ItemType>>
  : Type extends { [Symbol.toStringTag]: string }
  ? {}
  : Type extends {}
  ? {
      [Key in OmitKeys<Type, undefined | Function | Symbol>]: ParsedJSON<
        Type[Key]
      >;
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
