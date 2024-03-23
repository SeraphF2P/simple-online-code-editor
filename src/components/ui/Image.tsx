import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

type ImageProps = ComponentPropsWithoutRef<"img">;
export const Image = forwardRef<ElementRef<"img">, ImageProps>((props, ref) => {
	return <img {...props} />;
});
