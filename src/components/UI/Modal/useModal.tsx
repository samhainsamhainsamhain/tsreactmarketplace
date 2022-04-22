import { useState } from "react";

export function useModal() {
    const [isShown, setIsShown] = useState(false)
    function toggle() {
        setIsShown(!isShown)
    }
    return {
        isShown,
        toggle,
    }
} 