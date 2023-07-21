interface IfElseProps {
  isTrue: boolean;
  ifBlock: React.ReactNode;
  elseBlock: React.ReactNode;
}

const IfElse = ({ isTrue, ifBlock, elseBlock }: IfElseProps) => {
  return <>{isTrue ? <>{ifBlock}</> : <>{elseBlock}</>}</>;
};

export default IfElse;
