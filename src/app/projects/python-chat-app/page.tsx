import { Metadata } from "next";
import Image from "next/image";
import Title from "@/components/Title";
import TextPage from "@/components/TextPage";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Python Chat App",
    description:
        "Webpage detailing the functionality of J.L.'s Python Chat App.",
};

export default function PythonChatApp() {
    return (
        <TextPage>
            <h1 className="h1 mb-3 md:mb-6 xl:mb-8">Python Chat App</h1>
            <div className="relative mb-8">
                <Image
                    src="/images/projects/chatapp.png"
                    alt="Picture of PythonChatApp UI"
                    width={604}
                    height={637}
                ></Image>
                <p className="caption my-2 lg:my-4">
                    User Interface for Python Chat App
                </p>
            </div>
            <Title>Overview</Title>
            <p className="body-1 mb-6">
                The Python Chat Application is an application that allows two
                users to communicate through voice, video, and text chat. Text
                chat is fully functional for multiple users, but voice and video
                chat only work for two users at a time. The files for the
                application can be found{" "}
                <span>
                    <Link
                        href="https://github.com/JasonLouie/PythonChatApp"
                        className="text-n-2 underline"
                    >
                        here
                    </Link>
                </span>
                .
            </p>
            <Title>Functionality</Title>
            <p className="body-1 mb-6">
                Upon opening the chat client, the user is prompted to connect to
                the server by providing a unique username. Upon leaving, the
                username will be available to new users. Whenever a new user
                joins the server, a welcome message is sent to the other users
                and a confirmation message is sent to the user upon successfully
                connecting to the server. By default, video and voice chat are
                disabled when a user joins the server. Users can send text
                messages to one another by pressing enter or the send button.
                Users can video chat one another by toggling their video camera
                on or off. The same is true for voice chat.
            </p>
            <Title>How It Works</Title>
            <p className="body-1 mb-6">
                This is mainly accomplished through the use of the python
                modules sockets and threaded. Multithreading was especially
                crucial to the project since a chat server and client must be
                able to receive and send data simultaneously. Clients send
                packets of data to the server and the server broadcasts it to
                all users excluding the sender. All implementations (except for
                terminal text chat and TCP video chat) display the user's ping
                on the top left corner. User authentication is very rudimentary
                as it uses a list and does not retain information on previously
                conencted users. A username can be used again only after the
                current user disconnects.
            </p>
            <Title>Modules</Title>
            <p className="body-1 mb-6">
                The modules used in the python chat application are
                opencv-python, tk, imutils, sockets, threaded, numpy, pipwin,
                pyaudio, cProfile, stats, and time. The sockets module is used
                to create and use sockets. The threading module is used for
                creating and managing threads. These two modules are in all
                iterations of the chat application. The module tk (known as
                tkinter) is used to create the user interface for chat clients.
                The modules opencv-python, imutils, and numpy are used for video
                chat. The modules pipwin and pyaudio are used to download
                pyaudio and record/listen to audio respectively. The cProfile
                and pstats are used for code profiling. The time module is used
                for calculating user ping and increments for sending audio in
                implementations with voice chat.
            </p>
            <Title>Code Profiling</Title>
            <p className="body-1 mb-6">
                In terms of code profiling, the python libraries cProfile and
                pstats were used. Upon running a file using python -m cProfile
                -o outputname.stats implementation.py (substituting outputname
                for the desired output name and implementation for the name of
                the actual file), cProfile creates a file output- name.stats
                that stores function statistics after implementation.py is
                finished running. These can be accessed through the library
                pstats which allows filtering the data by number of function
                calls, total time ran, alphabetically, and by class. However,
                functions ran via threading do not appear in the statistics.
                This data helped isolate functions that ran for abnormally long
                amounts of time and these were fixed accordingly. When
                increasing code efficiency, whether lines of code are truly
                essential to the function and whether it can be removed or
                shortened must be taken into consideration. This mindset helped
                eliminate chunks of code that did not necessarily need to be
                used and were replaced with shorter, efficient methods. To view
                the statisics through pstats, the following command is ran in
                the terminal: python -m pstats outputname.stats, which opened a
                terminal interface for viewing the statistics. The two commands
                mainly used for debugging were stats and sort, which as named.
                The stats function has an optional parameter that filters out a
                specific class&rsquo;s data. This command is used to display the
                statistical data in the terminal. The sort command allows the
                results to be filtered based on the parameter provided. For
                instance, sort ncalls will display any data called from the
                function stats with functions that used the most ncalls on top.
                In terms of improving voice chat, a 0.05 buffer is added for
                recording audio (audio is sent every 0.05 seconds) and lowered
                the receiving side to append audio packets every 0.10 seconds
                before playing it. Similar to how audio is played on a separate
                temporary thread, the recorded audio is sent via a temporary
                thread as well. A second button that allows the client to deafen
                their audio is also implemented. Rather than keeping the
                recordAudio thread open all the time, this thread opens only
                when the user wishes to speak and terminate the thread
                otherwise. The following changes are also implemented in
                ChatClient.py and ChatServer.py. The changes in the previous two
                paragraphs are also made in those two files two. All updated
                files can be viewed in the main branch.
            </p>
        </TextPage>
    );
}
