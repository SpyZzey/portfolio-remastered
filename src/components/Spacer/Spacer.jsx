export default function Spacer({ id = '', height }) {
    return (
        <div
            id={id || undefined}
            style={{ height: `${height}px` }}
        />
    );
}
