import React, {FC} from 'react';
type TProps = {
    titleText: string
}
const InformationIcon:FC<TProps> = ({titleText}: TProps) => {
    return (
        <div title={titleText} className='information_icon ms-1'>
            <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15" height="15" rx="7.5" fill="#FFCC70"/>
            <path
                d="M7.4157 9.48C7.4157 9.144 7.4677 8.856 7.5717 8.616C7.6837 8.376 7.8197 8.164 7.9797 7.98C8.1477 7.796 8.3237 7.624 8.5077 7.464C8.6997 7.304 8.8797 7.144 9.0477 6.984C9.2157 6.816 9.3517 6.636 9.4557 6.444C9.5597 6.244 9.6117 6.012 9.6117 5.748C9.6117 5.316 9.4437 4.964 9.1077 4.692C8.7717 4.42 8.2957 4.284 7.6797 4.284C7.1677 4.284 6.7237 4.368 6.3477 4.536C5.9717 4.696 5.6517 4.936 5.3877 5.256L4.7517 4.776C5.0717 4.376 5.4837 4.068 5.9877 3.852C6.4917 3.636 7.0757 3.528 7.7397 3.528C8.2997 3.528 8.7837 3.612 9.1917 3.78C9.6077 3.948 9.9277 4.188 10.1517 4.5C10.3837 4.812 10.4997 5.184 10.4997 5.616C10.4997 5.96 10.4437 6.256 10.3317 6.504C10.2277 6.744 10.0917 6.96 9.9237 7.152C9.7637 7.336 9.5877 7.512 9.3957 7.68C9.2117 7.84 9.0357 8.004 8.8677 8.172C8.6997 8.34 8.5637 8.528 8.4597 8.736C8.3557 8.944 8.3037 9.192 8.3037 9.48H7.4157ZM7.8597 12.06C7.6917 12.06 7.5437 12 7.4157 11.88C7.2957 11.752 7.2357 11.604 7.2357 11.436C7.2357 11.26 7.2957 11.116 7.4157 11.004C7.5437 10.884 7.6917 10.824 7.8597 10.824C8.0437 10.824 8.1957 10.884 8.3157 11.004C8.4357 11.116 8.4957 11.26 8.4957 11.436C8.4957 11.604 8.4357 11.752 8.3157 11.88C8.1957 12 8.0437 12.06 7.8597 12.06Z"
                fill="white"/>
            </svg>
        </div>
    );
};

export default InformationIcon;