interface IProps {
    iframe: string
    className?: string
}

export const IframeParser = ({ className, iframe }: IProps) => {
    const parseIframe = (iframeStr: string) => {
        const srcMatch = iframeStr.match(/src="([^"]+)"/)
        const heightMatch = iframeStr.match(/height="([^"]+)"/)
        const allowMatch = iframeStr.match(/allow="([^"]+)"/)

        return {
            allow: allowMatch ? allowMatch[1] : '',
            height: heightMatch ? heightMatch[1] : '800',
            src: srcMatch ? srcMatch[1] : '',
            width: '100%',
        }
    }

    const { allow, height, src, width } = parseIframe(iframe)

    return (
        <iframe
            className={className}
            src={src}
            width={width}
            height={height}
            allow={allow}
            frameBorder='0'
            allowFullScreen
        />
    )
}
