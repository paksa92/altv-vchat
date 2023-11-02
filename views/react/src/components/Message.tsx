import { MessageType } from '../enums';
import classnames from 'classnames';
import './Message.scss';

export function Message(props: { type: MessageType; content: string; sender: string }) {
    return (
        <div
            className={classnames('flex flex-col items-end select-none fade-in rounded-full text-sm', {
                'py-[4px]': props.type !== MessageType.Default && props.type !== MessageType.Empty,
                'px-[8px]': props.type !== MessageType.Empty,
            })}
        >
            {props.type === MessageType.Info && <p className="font-serif font-bold text-blue-500">INFO</p>}
            {props.type === MessageType.Success && <p className="font-serif font-bold text-green-500">SUCCESS</p>}{' '}
            {props.type === MessageType.Warning && <p className="font-serif font-bold text-yellow-500">WARNING</p>}
            {props.type === MessageType.Error && <p className="font-serif font-bold text-red-600">ERROR</p>}
            {props.sender && <p className="text-serif font-bold text-neutral-500">{props.sender}</p>}
            <div
                className="text-neutral-100 font-sans font-light"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
    );
}
