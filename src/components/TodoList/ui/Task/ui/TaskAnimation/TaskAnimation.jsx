import "./taskAnimationStyles.css";
const TaskAnimation = ({ animationColor }) => {
  return (
    <div className="imso_mh__live-ind-mask" jstcache="630">
      <div className="imso_mh__live-ind-wrap" jstcache="0">
        <div
          className="live-ind-fixed"
          style={{ display: "none" }}
          jstcache="0"
        ></div>
        <div
          className={`imso_mh__live-ind-var`}
          style={{backgroundColor: animationColor}}
          jstcache="0"
        ></div>
      </div>
    </div>
  );
};

export default TaskAnimation;
