import './sales-box.css'
import React, {useMemo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "../tooltip/tooltip";
function SalesBox( props ) {
    const { uploads, successfulUploads, linesAttempted, linesSaved, lastUploadDate} = props?.data || {};


    const uploadPercentage = useMemo(() => {
        return props.data ? `${((successfulUploads / uploads) * 100).toFixed(0)}%` : '-';
    }, [props.data]);

    const linesPercentage = useMemo(() => {
        return props.data ? `${((linesSaved / linesAttempted) * 100).toFixed(0)}%` : '-';
    }, [props.data]);

    const lastUpdatedInfo = useMemo(() => {
        return props.data ? `Last updated at ${new Date(lastUploadDate).toLocaleDateString("en-US")}` : '';
    }, [props.data]);

    const salesData = useMemo(() => {
        if (props.data) {
            return <>You had <b>{uploads} uploads</b> and <b>{linesSaved}</b> lines added</>;
        }
        return 'No data to show';
    }, [props.data]);

    return (
        <div className="grid-container">
            <div className="grid-item-1 sales">
                <div className="sales-first-row">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faUpload} />
                        <div className="text">Sales</div>
                    </div>
                    { lastUpdatedInfo && <Tooltip icon={faInfoCircle} text={lastUpdatedInfo}/> }
                </div>
                <span>{salesData}</span>
            </div>
            <div className="grid-item-2">
                <div className="grid-item-3 upload-success">
                    <div className="percentage">{uploadPercentage}</div>
                    <div>UPLOAD SUCCESS</div>
                </div>
                <div className="grid-item-4 lines-saved">
                    <div className="percentage">{linesPercentage}</div>
                    <div>LINES SAVED</div>
                </div>
            </div>
        </div>
    )
}

export default SalesBox;