import {
	BsInfoCircle,
	BsTrash,
	BsUpload,
	BsX,
	BsExclamation,
} from "react-icons/bs";

export const Icon = {
	info: BsInfoCircle,
	upload: BsUpload,
	trash: BsTrash,
	X: BsX,
	exclamation: BsExclamation,
};
export type IconName = keyof typeof Icon;
