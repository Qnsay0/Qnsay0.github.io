import { Separator } from "./ui/separator";
type SectionHeaderProps = {
  id?: string;
  sectionName: string;
  index: string;
};

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div id={props.id}>
      <header className="flex flex-row justify-between mb-5 mt-10  text-muted-foreground">
        <p className="tracking-widest text-sm">{props.sectionName}</p>
        <span>({props.index})</span>
      </header>
      <Separator className={"bg-ink-3"} />
    </div>
  );
};

export default SectionHeader;
