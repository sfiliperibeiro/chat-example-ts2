import { useAppDispatch } from "../../hooks";
import dayjs from "dayjs";
import { Message as MessageModel } from "../../models/chat";
import relativeTime from "dayjs/plugin/relativeTime";

type Props ={
    message: MessageModel;
    index: number;
}


const Message: React.FC<Props> = ({message, index}) =>{

    dayjs.extend(relativeTime);

    const dispatch = useAppDispatch();

    const handleRemoveMessage = (index: number) =>{
    //TODO: Trabalho de Casa
};

    return (
        <div className="comment">
            <span className="avatar">
                <img src={message.author.avatar}></img>
            </span>

            <div className="content">
                <span className="author">{message.author.name}</span>

                <div className="metadata">
                    <span className="data">{dayjs(message.date).fromNow()}</span>
                </div>

                <div className="text">{message.text}</div>

                <div className="text"> <a href="#" className="reply" onClick={() => handleRemoveMessage(index)}>Delete</a> </div>


            </div>
        </div>
    )
};

export default Message;