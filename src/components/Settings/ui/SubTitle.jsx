function SubTitle(props) {
  return (
    <div className="flex gap-[10px] items-center mt-[30px] mb-[5px] text-third-text-color">
      <div className="flex justify-center items-center ">{props.children}</div>
      <h1 className="text-sm font-bold uppercase">{props.title}</h1>
    </div>
  );
}
export default SubTitle;
