import info from "../api/todoist/info";
const TodoistIntegrationButton = ({
  buttonContent,
  buttonClassStyles = "",
  buttonIcon = null,
}) => {
  return (
    <li className="list-none h-full">
      <a
        href={`https://todoist.com/oauth/authorize?client_id=${info.clientID}&scope=${info.permissionScopes}&state=${info.state}`}
        className={buttonClassStyles}
      >
        {buttonIcon === null ? (
          <div>{buttonContent}</div>
        ) : (
          <>
            <div>{buttonIcon}</div>
            <div className="hidden sm:block">{buttonContent}</div>
          </>
        )}
      </a>
    </li>
  );
};
export default TodoistIntegrationButton;
