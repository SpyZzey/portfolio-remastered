import { cloneElement, isValidElement } from 'react';
import './styles.css';

const LINK_VARIANTS = new Set(['inline', 'subtle', 'button', 'solid']);
const LINK_SIZES = new Set(['sm', 'md', 'lg']);

const cx = (...classes) => classes.filter(Boolean).join(' ');

function normalizeVariant(variant) {
    return LINK_VARIANTS.has(variant) ? variant : 'inline';
}

function normalizeSize(size) {
    return LINK_SIZES.has(size) ? size : 'md';
}

function renderIcon(icon) {
    if (!icon) return null;

    if (isValidElement(icon)) {
        return cloneElement(icon, {
            className: cx('ui-link__icon-svg', icon.props.className),
            'aria-hidden': icon.props['aria-hidden'] ?? true,
            focusable: icon.props.focusable ?? false,
        });
    }

    if (typeof icon === 'function') {
        const IconComponent = icon;
        return (
            <IconComponent
                className="ui-link__icon-svg"
                aria-hidden={true}
                focusable={false}
            />
        );
    }

    return <span className="ui-link__icon-content">{icon}</span>;
}

export default function Link({
    href = '#',
    text = '',
    icon,
    iconAlignment = 'left',
    children,
    variant = 'inline',
    size = 'md',
    className = null,
    openInNewTab = false,
    rel = null,
    ...props
}) {
    const safeVariant = normalizeVariant(variant);
    const safeSize = normalizeSize(size);
    const safeIconAlignment = iconAlignment === 'left' ? 'left' : 'right';
    const content = children ?? text;
    const iconNode = renderIcon(icon);

    const target = openInNewTab ? '_blank' : props.target;
    const safeRel = openInNewTab ? (rel ?? 'noopener noreferrer') : rel;
    const opensInNewTab = target === '_blank';

    return (
        <a
            href={href}
            className={cx('ui-link', `ui-link--${safeVariant}`, `ui-link--${safeSize}`, className)}
            target={target}
            rel={safeRel}
            {...props}>
            {iconNode && safeIconAlignment === 'left' && (
                <span className="ui-link__icon ui-link__icon--left">{iconNode}</span>
            )}
            {content && <span className="ui-link__label">{content}</span>}
            {opensInNewTab && <span className="sr-only">(opens in a new tab)</span>}
            {iconNode && safeIconAlignment === 'right' && (
                <span className="ui-link__icon ui-link__icon--right">{iconNode}</span>
            )}
        </a>
    );
}
