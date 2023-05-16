"use client";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useInfoModal from "../hooks/useInfoModal";
import useMovie from "../hooks/useMovie";

interface Props {
    visible?: boolean;
    onClose: any;
}

export default function InfoModal({ visible, onClose }: Props) {
    const [isVisible, setIsVisible] = useState(visible);
    const { movieId } = useInfoModal();
    const { data } = useMovie(movieId);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return <div>InfoModal</div>;
}
