import React from 'react';
import {ITrack} from "../types/track";
import {Card, IconButton} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'

interface TrackItemProps {
    track: ITrack,
    active?: boolean,
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton>

            </IconButton>
        </Card>
    );
};

export default TrackItem;