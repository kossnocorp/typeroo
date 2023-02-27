/**
 * Creates interfaces union where all fields from all variants are present.
 */
export type InterfaceUnion<
  A,
  B,
  C = undefined,
  D = undefined,
  E = undefined,
  F = undefined,
  G = undefined,
  H = undefined,
  I = undefined,
  J = undefined
> = C extends undefined
  ? InterfaceUnion2<A, B>
  : D extends undefined
  ? InterfaceUnion3<A, B, C>
  : E extends undefined
  ? InterfaceUnion4<A, B, C, D>
  : F extends undefined
  ? InterfaceUnion5<A, B, C, D, E>
  : G extends undefined
  ? InterfaceUnion6<A, B, C, D, E, F>
  : H extends undefined
  ? InterfaceUnion7<A, B, C, D, E, F, G>
  : I extends undefined
  ? InterfaceUnion8<A, B, C, D, E, F, G, H>
  : J extends undefined
  ? InterfaceUnion9<A, B, C, D, E, F, G, H, I>
  : InterfaceUnion10<A, B, C, D, E, F, G, H, I, J>;

type InterfaceUnion2<A, B> =
  | (A & UndefinedDifference<A, B>)
  | (B & UndefinedDifference<B, A>);

type InterfaceUnion3<A, B, C> =
  | (A & UndefinedDifference<A, B> & UndefinedDifference<A, C>)
  | (B & UndefinedDifference<B, A> & UndefinedDifference<B, C>)
  | (C & UndefinedDifference<C, A> & UndefinedDifference<C, B>);

type InterfaceUnion4<A, B, C, D> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C>);

type InterfaceUnion5<A, B, C, D, E> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D>);

type InterfaceUnion6<A, B, C, D, E, F> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E> &
      UndefinedDifference<A, F>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E> &
      UndefinedDifference<B, F>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E> &
      UndefinedDifference<C, F>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E> &
      UndefinedDifference<D, F>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D> &
      UndefinedDifference<E, F>)
  | (F &
      UndefinedDifference<F, A> &
      UndefinedDifference<F, B> &
      UndefinedDifference<F, C> &
      UndefinedDifference<F, D> &
      UndefinedDifference<F, E>);

type InterfaceUnion7<A, B, C, D, E, F, G> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E> &
      UndefinedDifference<A, F> &
      UndefinedDifference<A, G>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E> &
      UndefinedDifference<B, F> &
      UndefinedDifference<B, G>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E> &
      UndefinedDifference<C, F> &
      UndefinedDifference<C, G>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E> &
      UndefinedDifference<D, F> &
      UndefinedDifference<D, G>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D> &
      UndefinedDifference<E, F> &
      UndefinedDifference<E, G>)
  | (F &
      UndefinedDifference<F, A> &
      UndefinedDifference<F, B> &
      UndefinedDifference<F, C> &
      UndefinedDifference<F, D> &
      UndefinedDifference<F, E> &
      UndefinedDifference<F, G>)
  | (G &
      UndefinedDifference<G, A> &
      UndefinedDifference<G, B> &
      UndefinedDifference<G, C> &
      UndefinedDifference<G, D> &
      UndefinedDifference<G, E> &
      UndefinedDifference<G, F>);

type InterfaceUnion8<A, B, C, D, E, F, G, H> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E> &
      UndefinedDifference<A, F> &
      UndefinedDifference<A, G> &
      UndefinedDifference<A, H>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E> &
      UndefinedDifference<B, F> &
      UndefinedDifference<B, G> &
      UndefinedDifference<B, H>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E> &
      UndefinedDifference<C, F> &
      UndefinedDifference<C, G> &
      UndefinedDifference<C, H>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E> &
      UndefinedDifference<D, F> &
      UndefinedDifference<D, G> &
      UndefinedDifference<D, H>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D> &
      UndefinedDifference<E, F> &
      UndefinedDifference<E, G> &
      UndefinedDifference<E, H>)
  | (F &
      UndefinedDifference<F, A> &
      UndefinedDifference<F, B> &
      UndefinedDifference<F, C> &
      UndefinedDifference<F, D> &
      UndefinedDifference<F, E> &
      UndefinedDifference<F, G> &
      UndefinedDifference<F, H>)
  | (G &
      UndefinedDifference<G, A> &
      UndefinedDifference<G, B> &
      UndefinedDifference<G, C> &
      UndefinedDifference<G, D> &
      UndefinedDifference<G, E> &
      UndefinedDifference<G, F> &
      UndefinedDifference<G, H>)
  | (H &
      UndefinedDifference<H, A> &
      UndefinedDifference<H, B> &
      UndefinedDifference<H, C> &
      UndefinedDifference<H, D> &
      UndefinedDifference<H, E> &
      UndefinedDifference<H, F> &
      UndefinedDifference<H, G>);

type InterfaceUnion9<A, B, C, D, E, F, G, H, I> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E> &
      UndefinedDifference<A, F> &
      UndefinedDifference<A, G> &
      UndefinedDifference<A, H> &
      UndefinedDifference<A, I>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E> &
      UndefinedDifference<B, F> &
      UndefinedDifference<B, G> &
      UndefinedDifference<B, H> &
      UndefinedDifference<B, I>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E> &
      UndefinedDifference<C, F> &
      UndefinedDifference<C, G> &
      UndefinedDifference<C, H> &
      UndefinedDifference<C, I>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E> &
      UndefinedDifference<D, F> &
      UndefinedDifference<D, G> &
      UndefinedDifference<D, H> &
      UndefinedDifference<D, I>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D> &
      UndefinedDifference<E, F> &
      UndefinedDifference<E, G> &
      UndefinedDifference<E, H> &
      UndefinedDifference<E, I>)
  | (F &
      UndefinedDifference<F, A> &
      UndefinedDifference<F, B> &
      UndefinedDifference<F, C> &
      UndefinedDifference<F, D> &
      UndefinedDifference<F, E> &
      UndefinedDifference<F, G> &
      UndefinedDifference<F, H> &
      UndefinedDifference<F, I>)
  | (G &
      UndefinedDifference<G, A> &
      UndefinedDifference<G, B> &
      UndefinedDifference<G, C> &
      UndefinedDifference<G, D> &
      UndefinedDifference<G, E> &
      UndefinedDifference<G, F> &
      UndefinedDifference<G, H> &
      UndefinedDifference<G, I>)
  | (H &
      UndefinedDifference<H, A> &
      UndefinedDifference<H, B> &
      UndefinedDifference<H, C> &
      UndefinedDifference<H, D> &
      UndefinedDifference<H, E> &
      UndefinedDifference<H, F> &
      UndefinedDifference<H, G> &
      UndefinedDifference<H, I>)
  | (I &
      UndefinedDifference<I, A> &
      UndefinedDifference<I, B> &
      UndefinedDifference<I, C> &
      UndefinedDifference<I, D> &
      UndefinedDifference<I, E> &
      UndefinedDifference<I, F> &
      UndefinedDifference<I, G> &
      UndefinedDifference<I, H>);

type InterfaceUnion10<A, B, C, D, E, F, G, H, I, J> =
  | (A &
      UndefinedDifference<A, B> &
      UndefinedDifference<A, C> &
      UndefinedDifference<A, D> &
      UndefinedDifference<A, E> &
      UndefinedDifference<A, F> &
      UndefinedDifference<A, G> &
      UndefinedDifference<A, H> &
      UndefinedDifference<A, I> &
      UndefinedDifference<A, J>)
  | (B &
      UndefinedDifference<B, A> &
      UndefinedDifference<B, C> &
      UndefinedDifference<B, D> &
      UndefinedDifference<B, E> &
      UndefinedDifference<B, F> &
      UndefinedDifference<B, G> &
      UndefinedDifference<B, H> &
      UndefinedDifference<B, I> &
      UndefinedDifference<B, J>)
  | (C &
      UndefinedDifference<C, A> &
      UndefinedDifference<C, B> &
      UndefinedDifference<C, D> &
      UndefinedDifference<C, E> &
      UndefinedDifference<C, F> &
      UndefinedDifference<C, G> &
      UndefinedDifference<C, H> &
      UndefinedDifference<C, I> &
      UndefinedDifference<C, J>)
  | (D &
      UndefinedDifference<D, A> &
      UndefinedDifference<D, B> &
      UndefinedDifference<D, C> &
      UndefinedDifference<D, E> &
      UndefinedDifference<D, F> &
      UndefinedDifference<D, G> &
      UndefinedDifference<D, H> &
      UndefinedDifference<D, I> &
      UndefinedDifference<D, J>)
  | (E &
      UndefinedDifference<E, A> &
      UndefinedDifference<E, B> &
      UndefinedDifference<E, C> &
      UndefinedDifference<E, D> &
      UndefinedDifference<E, F> &
      UndefinedDifference<E, G> &
      UndefinedDifference<E, H> &
      UndefinedDifference<E, I> &
      UndefinedDifference<E, J>)
  | (F &
      UndefinedDifference<F, A> &
      UndefinedDifference<F, B> &
      UndefinedDifference<F, C> &
      UndefinedDifference<F, D> &
      UndefinedDifference<F, E> &
      UndefinedDifference<F, G> &
      UndefinedDifference<F, H> &
      UndefinedDifference<F, I> &
      UndefinedDifference<F, J>)
  | (G &
      UndefinedDifference<G, A> &
      UndefinedDifference<G, B> &
      UndefinedDifference<G, C> &
      UndefinedDifference<G, D> &
      UndefinedDifference<G, E> &
      UndefinedDifference<G, F> &
      UndefinedDifference<G, H> &
      UndefinedDifference<G, I> &
      UndefinedDifference<G, J>)
  | (H &
      UndefinedDifference<H, A> &
      UndefinedDifference<H, B> &
      UndefinedDifference<H, C> &
      UndefinedDifference<H, D> &
      UndefinedDifference<H, E> &
      UndefinedDifference<H, F> &
      UndefinedDifference<H, G> &
      UndefinedDifference<H, I> &
      UndefinedDifference<H, J>)
  | (I &
      UndefinedDifference<I, A> &
      UndefinedDifference<I, B> &
      UndefinedDifference<I, C> &
      UndefinedDifference<I, D> &
      UndefinedDifference<I, E> &
      UndefinedDifference<I, F> &
      UndefinedDifference<I, G> &
      UndefinedDifference<I, H> &
      UndefinedDifference<I, J>)
  | (J &
      UndefinedDifference<J, A> &
      UndefinedDifference<J, B> &
      UndefinedDifference<J, C> &
      UndefinedDifference<J, D> &
      UndefinedDifference<J, E> &
      UndefinedDifference<J, F> &
      UndefinedDifference<J, G> &
      UndefinedDifference<J, H> &
      UndefinedDifference<J, I>);

type UndefinedDifference<BaseType, ApplyingType> = {
  [Key in Exclude<keyof ApplyingType, keyof BaseType>]?: undefined;
};

export type WholeOrPartial<Type> = Type | { [Key in keyof Type]?: Type[Key] };

export type WholeOrEmpty<Type> = Type | { [Key in keyof Type]?: undefined };
