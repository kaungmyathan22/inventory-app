import IfElse from "./IfElse";

interface IfProps {
  isTrue: boolean;
  ifBlock: React.ReactNode;
}

const If = ({ isTrue, ifBlock }: IfProps) => {
  return <IfElse isTrue={isTrue} ifBlock={ifBlock} elseBlock={null} />;
};

export default If;
