export default function SubHeaderBlock({ header }: { header: string }){
    return (
        <div>
            <h5 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-medium">{header}</h5>
        </div>
    );
}