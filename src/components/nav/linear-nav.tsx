import { SECTIONS, SECTIONS_LIST } from "@/constants/sections";
import type { MouseEventHandler } from "react";
import { Icon } from "../common/icon";
import { Link } from "../common/link";

const sectionLinks = SECTIONS_LIST.filter(
  (section) => section.id !== SECTIONS.CONTACT.id,
);

type LinearNavProps = {
  orientation?: "horizontal" | "vertical";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const LinearNav: React.FC<LinearNavProps> = ({
  orientation = "horizontal",
  onClick,
}) => {
  return (
    <nav>
      <ul
        className={`flex gap-5 ${orientation === "horizontal" ? "flex-row items-center" : "flex-col items-start"}`}
      >
        {sectionLinks.map(({ href, title, svg }) => (
          <li key={title}>
            <Link
              href={href}
              className="flex items-center gap-2"
              variant="link"
              onClick={onClick}
            >
              <Icon icon={svg} className="size-6 fill-current" />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
