import { cloneElement, isValidElement } from 'react';
import './styles.css';

const BUTTON_VARIANTS = new Set(['primary', 'secondary', 'ghost']);
const BUTTON_SIZES = new Set(['sm', 'md', 'lg']);

const cx = (...classes) => classes.filter(Boolean).join(' ');

function normalizeVariant(variant) {
    return BUTTON_VARIANTS.has(variant) ? variant : 'primary';
}

function normalizeSize(size) {
    return BUTTON_SIZES.has(size) ? size : 'md';
}

function renderIcon(icon) {
    if (!icon) return null;

    if (isValidElement(icon)) {
        return cloneElement(icon, {
            className: cx('ui-button__icon-svg', icon.props.className),
            'aria-hidden': icon.props['aria-hidden'] ?? true,
            focusable: icon.props.focusable ?? false,
        });
    }

    if (typeof icon === 'function') {
        const IconComponent = icon;
        return (
            <IconComponent
                className="ui-button__icon-svg"
                aria-hidden={true}
                focusable={false}
            />
        );
    }

    return <span className="ui-button__icon-content">{icon}</span>;
}

export default function Button({
    text,
    icon,
    iconAlignment = 'left',
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    type = 'button',
    disabled = false,
    ...props
}) {
    const safeVariant = normalizeVariant(variant);
    const safeSize = normalizeSize(size);
    const safeIconAlignment = iconAlignment === 'right' ? 'right' : 'left';
    const content = children ?? text;
    const iconNode = renderIcon(icon);

    return (
        <button
            type={type}
            className={cx(
                'ui-button',
                `ui-button--${safeVariant}`,
                `ui-button--${safeSize}`,
                fullWidth && 'ui-button--full',
                className,
            )}
            disabled={disabled}
            {...props}>
            {iconNode && safeIconAlignment === 'left' && (
                <span className="ui-button__icon ui-button__icon--left">{iconNode}</span>
            )}
            {content && <span className="ui-button__label">{content}</span>}
            {iconNode && safeIconAlignment === 'right' && (
                <span className="ui-button__icon ui-button__icon--right">{iconNode}</span>
            )}
        </button>
    );
}
