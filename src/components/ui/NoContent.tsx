import { FC } from "react";
import { Icon } from "~/ui";

interface NoContentProps {
	caption?: string;
}

const NoContent: FC<NoContentProps> = ({
	caption = "no content available",
}) => {
	return (
		<div className=" m-auto  flex  h-[135px] w-[240px] flex-col items-center justify-center gap-2 rounded  bg-gray-500 shadow-sm">
			<Icon.info className="  h-1/2 w-1/2" />
			<p>{caption}</p>
		</div>
	);
};

export default NoContent;
