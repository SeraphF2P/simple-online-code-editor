import { ErrorBoundary as EB, ErrorBoundaryProps } from "react-error-boundary";
import { Icon } from "./Icons";

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
	return (
		<EB
			fallback={
				<div
					className={`text-red  flex w-full items-center justify-center gap-4 bg-transparent p-4`}
				>
					<Icon.exclamation className=" size-10" />
					<span> Could not fetch the data</span>
				</div>
			}
		>
			{children}
		</EB>
	);
};
