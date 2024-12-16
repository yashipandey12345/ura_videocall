import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async (element) => {
            const appId = 69005885;
            const serverSecret = "42940a78af461684365e9b647fa7ec52";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Yatin");
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            });
        };

        if (meetingRef.current) {
            myMeeting(meetingRef.current);
        }
    }, [roomId]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#000", 
            color: "#fff", 
            fontFamily: "'Roboto', sans-serif",
            padding: "20px",
            boxSizing: "border-box",
        },
        title: {
            fontSize: "1.0rem",
            marginBottom: "2rem",
            color: "#ff69b4", 
            textShadow: "0 0 8px rgba(255, 105, 180, 0.8)",
            textTransform: "uppercase",
            letterSpacing: "2px",
        },
        meetingContainer: {
            width: "100%",
            maxWidth: "1200px",
            height: "85vh",
            boxShadow: "0 0 20px rgba(255, 105, 180, 0.5)",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1a1a1a", 
        },
        info: {
            marginTop: "1.5rem",
            fontSize: "1rem",
            color: "#ff69b4",
            textShadow: "0 0 5px rgba(255, 105, 180, 0.8)",
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>TalkMe Room: {roomId}</h1>
            <div ref={meetingRef} style={styles.meetingContainer}></div>
            <p style={styles.info}>Enjoy your call with TalkMe! Share the link with others to join.</p>
        </div>
    );
};

export default RoomPage;
