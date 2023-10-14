// creating an array and passing the number, questions, options, and answers

var questions = []
var picked_test = window.localStorage.getItem("test")
function set_question(which_q) {
  var decided_q = []

  switch (which_q) {
    case "1":
      decided_q = [
        {
          numb: 1,
          question: "A group of connected computers that are able to send data to each other ar called",
          answer: "Network",
          options: [
            "Network",
            "Chain",
            "Grid",
            "Organization"
          ]
        },
        {
          numb: 2,
          question: "What can be part of the internet?",
          answer: "Any computer or hardware that can send and receive data in the correct fashion",
          options: [
            "Any computer or hardware that can send and receive data in the correct fashion",
            "Any computer or hardware that can send data in the correct fashion",
            "Any computer or hardware that can receive data in the correct fashion",
            "Any computer or hardware"
          ]
        }
      ];
      window.localStorage.setItem("test", "1" );
      break;
    case "2":
      decided_q = [
        {
          numb: 1,
          question: "What is a small segment of a larger message in networking?",
          answer: "Packet",
          options: [
            "Sentance",
            "Packet",
            "Package"
          ]
        },
        {
          numb: 2,
          question: "How the use of communications techniques that are understandable by all connected computers are called?",
          answer: "Protocols",
          options: [
            "It doesn't have a name",
            "ComTech",
            "Packet",
            "Protocols"
          ]
        }
      ];
      window.localStorage.setItem("test", "2");
      break;
    case "3":
      decided_q = [
        {
          numb: 1,
          question: "Who forwards packets to different computer networks based on their destination?",
          answer: "Routers",
          options: [
            "Routers",
            "Switches",
            "Servers"
          ]
        },
        {
          numb: 2,
          question: "Who connects devices that share a single network?",
          answer: "Switches",
          options: [
            "Routers",
            "Switches",
            "Servers"
          ]
        }
      ];
      window.localStorage.setItem("test", "3" );
      break;
    case "4":
      decided_q = [
        {
          numb: 1,
          question: "What processes and protocols are involved in loading a webpage? (pick the most accurate answer)",
          answer: "DNS, TCP, TLS, HTTP",
          options: [
            "DNS, TCP, TLS, HTTP",
            "DNS, TCP, TLS",
            "DNS, TLS, HTTP",
            "TCP, TLS, HTTP"
          ]
        },
        {
          numb: 2,
          question: "What the specific steps involved in this process are? (pick the most accurate answer)",
          answer: "DNS query, DNS query, TLS handshake, HTTP request, HTTP response",
          options: [
            "TLS handshake, HTTP request, HTTP response",
            "DNS query, DNS query, HTTP request, HTTP response",
            "DNS query, DNS query, TLS handshake",
            "DNS query, DNS query, TLS handshake, HTTP request, HTTP response"
          ]
        }
      ];
      window.localStorage.setItem("test", "4" );
      break;
    
    default:
      console.log(`Sorry, we are out of XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD`);
  }
  questions = decided_q
}
set_question(picked_test)