export function Title({dir}: {dir: string}) {
    return ( 
        <div className="flex">
            <div className="text-green-400">visitor@brandon-web.com</div>
            <div>:</div>
            <div className="text-blue-400">~{dir}</div>
            <div>$&nbsp;</div>
        </div>
     );
}