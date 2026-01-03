Develop me a HTML,CSS,JS website that is for cybersecurity themed for security tools manual for my IT Security subject. Bento box design, Framer animation, Animated site. Theme color purple, spaceship color, gravity. For each installation and demo steps can use a carousel image (screenshots) and it steps OR use bento box style. Make sure the image is fit not cover. For each steps image (use placeholder.webp)

Landing Page (index)
Header - Beautiful animated header with logo, navigation (Home, Data Recovery, FTP Application, Remote Access, CIA Analysis Comparison, Project Timeline, Conclusion)
Hero section
- Blurred background image (hero.webp)
- Project Title: "GROUP H - Security Tools Manual"
- Introduction Paragraph:
In today’s digital era, organizations rely on IT systems, and protecting data, maintaining availability, and securing remote access are critical. This manual provides a detailed guide on three essential security tools across different subtopics, demonstrating their installation, use, and impact on the CIA security model.

Next Section :
Short description of selected subtopics and tools
CTA Buttons linking to each tool page: "Explore Wondershare Recoverit", "Explore Cyberduck", "Explore HelpWire" that will link to these pages

Team Section :
Beautiful 5 card that show all team members image, name and matric no, I have put the image for each member (member1.webp and so on)

Footer Section:
Logo
Quick links for all
© GROUP H - BITS 3423 - Information Technology Security

---------------------

Page: Data Recovery - Wondershare Recoverit

Background (Add background image called wondershare.webp) :
What is Wondershare Recoverit? 
Wondershare Recoverit is a sophisticated and comprehensive data recovery system designed to retrieve lost, deleted, or formatted files from a wide range of storage devices. It serves as a digital safety net for both individuals and IT professionals, capable of restoring over 1,000 file types, including photos, videos, documents, and emails.
Background and Evolution Developed by Wondershare Technology, the tool has been a staple in the data recovery industry since 2003. Originally known as "Wondershare Data Recovery," it was officially rebranded as Recoverit in 2018 to reflect its modernized scanning algorithms and improved success rates. Today, it is used by millions of users across 160 countries and is recognized for its high recovery success rate of approximately 99.5%.

Key Features & Capabilities
• Deep Scan Technology: The software uses advanced algorithms to dive deep into storage sectors, locating file metadata even if the directory hierarchy is lost.
• Versatile Scenario Support: It can recover data from over 500 different loss scenarios, such as accidental "Shift+Delete" operations, emptied Recycle Bins, system crashes (Blue Screen of Death), and virus attacks.
• Wide Device Compatibility: Recoverit supports more than 2,000 storage media types, including internal Hard Drives (HDD/SSD), USB flash drives, SD cards, digital cameras (DSLR/GoPro), and even NAS or Linux systems.
• Preview and Filter: To save time, users can filter results by file size or type and preview documents or images before committing to the recovery process.

Installation & Environment Setup:
System Requirements: Windows/macOS, Internet, FTP/SFTP server
Steps:
Step 1: Click the download button
Step 2: Installer file will appear and click it to begin the installation
Step 3: Select the installation folder and wait the installation to finish
Step 4: After the installation finish, open the Wondershare Recoverit.

Demo Procedure :
Objective: Recover a deleted file.
Steps:
Step 1: Create a folder and put a file inside the folder. And then delete the file inside the folder. Delete the file in recycle bin also.
Step 2: Click Select Folder in Recoverit Dashboard.
Step 3: Select a folder that consists the deleted file.
Step 4: After a folder is selected, it will automatically start scanning.
Step 5: Click the folder that consists the deleted file to recover the deleted file
Step 6: If successful, it will give a “recover completed” message.
Step 7: Verify if the recovered file can be opened. In this case, the deleted file is recovered successfully.

CIA Analysis (Table) : Wondershare Recoverit
CIA Component |	Analysis for Wondershare Recoverit
Confidentiality | High Security Risk: Recoverit demonstrates that "deleting" a file does not actually remove it from the disk; it only marks the space as available. This poses a major confidentiality threat because an unauthorized user with this tool can retrieve sensitive data from discarded or lost drives that were not properly wiped.
Integrity | Supportive but Fragile: The tool aims to restore data to its original, accurate state. However, its "Deep Scan" often finds fragmented or corrupted "Raw" files that have lost their original names or metadata. Additionally, the act of installing the software on the same drive you are scanning can overwrite the very data you want to save, permanently damaging its integrity.
Availability | Primary Function: Recoverit is fundamentally an Availability tool. Its core purpose is to ensure that critical information remains accessible even after accidental deletion, system crashes (Blue Screen of Death), or partition loss. It restores access to data that would otherwise be permanently "unavailable" to the user.

------------------------

Page: FTP Application - Cyberduck

Background (Add background image called cyberduck.webp) :

File Transfer Protocol (FTP) is used to transfer files between a client and a server over a network. However, traditional FTP transmits data in plaintext, which may expose sensitive information to security risks. Cyberduck is a file transfer application that supports secure protocols such as FTPS and SFTP, enabling encrypted file transfers. In this project, Cyberduck is used to demonstrate secure file transfer and to highlight the importance of protecting data confidentiality, integrity, and availability during transmission.

Key benefits of Cyberduck
• Supports secure file transfer protocols (FTPS and SFTP)
• Encrypts data to protect usernames, passwords, and file contents
• User-friendly interface for easy file management
• Ensures accurate file transfer without data modification
• Provides reliable access to servers for uploading and downloading files

Installation & Environment Setup
System Requirements: Windows/macOS, Internet, FTP/SFTP server (cPanel Web Hosting)
Steps:
1. Download the Cyberduck installer from the official Cyberduck website.
2. Run the installer file on computer.
3. Click Install and wait until the installation process completes.
4. Launch Cyberduck after installation is finished.
5. Enter your own web server (cPanel) to create a FTP Server.
6. Select FTP Management and Create an FTP Account (Enter Username and Password)
7. Click Create button after done and saved the creds given (Server,Username,Password) to paste into the CyberDuck FTP Client connection Configuration.

Demo Procedure
Objective: Demonstrate secure file transfer.
Steps:
1. Open Cyberduck and click "Open Connection"
2. Select FTP, FTPS, or SFTP
3. Enter server address, username, password
4. Click "Connect"
5. Verify that the FTP connection is successfully established in Cyberduck. 
6. Drag a local test file (test.txt) into the Cyberduck window.
7. Observe the file transfer progress in the Transfers panel.
8. Confirm that the uploaded file appears in the FTP server directory.

CIA Analysis - Cyberduck

Confidentiality
Cyberduck supports secure protocols such as FTPS and SFTP to encrypt data during file transfer. Encryption protects usernames, passwords, and file contents from unauthorized access. Security warnings are displayed when unsecured FTP connections are used.

Integrity
Cyberduck maintains data integrity by transferring files without modification. Uploaded files retain the same content and size when stored on the server and downloaded back to the client.

Availability
Cyberduck ensures availability by providing stable and reliable access to FTP servers. Users can upload and download files as long as the server is active, supporting continuous file access.

CIA Analysis Table
CIA Component |	How Cyberduck Implements it
Confidentiality | Encrypted protocols (FTPS, SFTP) and security warnings.
Integrity | Accurate file transfer without data modification.
Availability | Reliable client access and stable connections.

------------------------

Page: Remote Access - HelpWire

Background (Add background image called helpwire.webp) :
Remote access technology allows users to control and manage computers from a distance, making it essential for IT support, system maintenance, and remote work. HelpWire is a professional remote access service that provides secure, encrypted sessions with explicit user approval, ensuring both security and accountability.
HelpWire empowers businesses and home users with remote desktop control tools for Windows, macOS, and Linux. By enabling fast and efficient remote support, HelpWire eliminates the need for costly on-site visits, saving time and resources. Its features, including unattended access requests and controlled administrative privileges, ensure that sensitive operations are conducted safely and securely.

Key Benefits:
• Secure remote desktop access
• Encrypted communication
• Controlled administrative access with client approval
• Cross-platform support (Windows, macOS, Linux)
• Reduces downtime and on-site support costs

Installation & Environment Setup
System Requirements: Windows/macOS, Internet, two PCs or one VM

Operator Setup
Steps:
1. Visit the HelpWire website.
2. Register a new account.
3. Login to your account.
4. In the dashboard, navigate to App Center located below your profile.
5. Select the appropriate software version for your operating system to download the HelpWire Operator App.
6. Click Download.
7. Open the downloaded executable file (helpwire_setup.exe).
8. In the installation dialog, select "I agree to the Terms of Service" and click Install.
9. Wait for the installation to complete.
10. Click Finish when the installation is done.

Client Setup
Steps:
1. Click the link provided by the Operator (example: https://www.helpwire.app/builds/?token=12345abcd12345abcd12345abcdefghi).
2. The link will redirect you to download the HelpWire Client.
3. Launch the downloaded executable to open the Client App.

Demo Procedure
Objective: Demonstrate secure remote access.
Operator Steps:
1. On the HelpWire web dashboard, click Add New Client.
2. Copy the generated link and provide it to the client.
3. Wait for the client to click the link, install the HelpWire Client, and launch the app.
4. Request Access and wait for the client to approve it.
5. Click Connect to access the client PC after approval.
6. In the popup dialog, select Open HelpWire Operator.
7. Wait for the connection to establish.
8.To perform administrative tasks, request Admin Access. The client must approve via the User Account Control prompt. The session will auto-reconnect once approved. Note: The operator cannot bypass this approval.
9. If the operator deletes the client, the HelpWire Client app on the client workstation will stop functioning. The client must request a new link from the operator to start a new session.


Client Steps:
1. Click the link provided by the operator (example: https://www.helpwire.app/builds/?token=12345abcd12345abcd12345abcdefghi).
2. The link redirects to download the HelpWire Client.
3. Launch the executable to open the Client App.
4. Wait for the operator to request access.
5. Grant access when prompted by the HelpWire Client popup message.

CIA Analysis - HelpWire

Confidentiality
HelpWire ensures confidentiality through end-to-end encryption of all remote sessions. Access requests require explicit client approval, preventing unauthorized users from viewing or controlling sensitive information.

Integrity
The integrity of client systems is maintained because HelpWire allows only approved actions. Administrative access requires client consent via User Account Control, ensuring that operators cannot make unauthorized changes.

Availability
HelpWire enhances availability by enabling remote access anytime and anywhere, allowing operators to troubleshoot, support, or manage systems without physically being present. This ensures continuous operational support and reduces downtime.

CIA Analysis (Table) - HelpWire
CIA Component | How HelpWire Implements It
Confidentiality	| End-to-end encryption, client-approved access
Integrity | Controlled actions, mandatory approval for admin tasks
Availability | Remote access ensures timely support and operational continuity

--------------------

Page: CIA Analysis Comparison 
Table:
Tool | Confidentiality | Integrity | Availability
Wondershare Recoverit |	Access restricted by OS permissions | Preserves file content | Restores lost data
Cyberduck | Encrypted transfers | Ensures files unaltered | Reliable transfers
HelpWire | Encrypted sessions, approved access | Controlled operations | Remote system access anytime

---------------------
Page: Project Timeline

gantt.webp

Text:
Week 12: Install, demo, document Wondershare Recoverit
Week 13: Install, demo, document Cyberduck
Week 14: Install, demo, document HelpWire

------------------
Page: Conclusion
The selected tools cover three critical subtopics: Data Recovery, FTP Application, and Remote Access. Each tool strengthens or secures IT services, demonstrating CIA principles:

Wondershare Recoverit: Ensures availability of data

Cyberduck: Secures file transfer confidentiality and integrity

HelpWire: Enables secure remote access maintaining availability and integrity

Using these tools ensures data protection, operational continuity, and system security.