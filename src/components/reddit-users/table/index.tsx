import { FormEvent, useRef, useState } from "react";

// Next components
import Image from "next/image";

// Data
import users from "@/data/reddit-users.json";

// Hooks
import UseOnClickOutside from "@/hooks/useOnClickOutside";

// Types
import { redditUsers } from "@/types/redditUsers";

// Components
import { Table, Tbody, Td, Thead, Tr } from "@/components/ui/table";
import Pagination from "@/components/ui/pagination";
import Search from "@/components/ui/search";
import Select from "@/components/ui/form/select";

// Images
import UserImage from "@/assets/img/user.jpg";
import Button from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import Checkbox from "@/components/ui/form/checkbox";

const RedditUsersTable = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  UseOnClickOutside(dropdownRef, () => {
    setDisplayFilterDropdown(false);
  });

  // states
  const [displayFilterDropdown, setDisplayFilterDropdown] =
    useState<boolean>(false);

  const [displayName, setDisplayName] = useState<boolean>(true);
  const [displayUsername, setDisplayUsername] = useState<boolean>(true);
  const [displayEmail, setDisplayEmail] = useState<boolean>(true);
  const [displayPhone, setDisplayPhone] = useState<boolean>(true);
  const [displayDob, setDisplayDob] = useState<boolean>(true);
  const [displayTasks, setDisplayTasks] = useState<boolean>(true);

  // pagination
  const pagination = [
    {
      number: 1,
      active: true,
    },
    {
      number: 2,
      active: false,
    },
    {
      number: 3,
      active: false,
    },
    {
      number: 4,
      active: false,
    },
  ];

  // limits
  const limits = [
    {
      title: "10",
      value: "10",
    },
    {
      title: "25",
      value: "25",
    },
    {
      title: "50",
      value: "50",
    },
    {
      title: "100",
      value: "100",
    },
  ];

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <Search />
        </div>

        <div className="flex items-center gap-8">
          <Select options={limits} label="Rows" labelRow={true} />
          <Select options={limits} label="Tasks" labelRow={true} />

          <div className="relative">
            <Button
              variant="secondary"
              onClick={() => {
                setDisplayFilterDropdown(!displayFilterDropdown);
              }}
            >
              Customize <Icon path={mdiChevronDown} size={1} />
            </Button>

            {/* dropdown */}
            {displayFilterDropdown ? (
              <div
                ref={dropdownRef}
                className="absolute top-[45px] left-0 w-full bg-gray-200 dark:bg-dark-400 rounded p-2 space-y-1"
              >
                <Checkbox
                  label="Name"
                  onChange={() => {
                    setDisplayName(!displayName);
                  }}
                  checked={displayName}
                />

                <Checkbox
                  label="Username"
                  onChange={() => {
                    setDisplayUsername(!displayUsername);
                  }}
                  checked={displayUsername}
                />

                <Checkbox
                  label="Email"
                  onChange={() => {
                    setDisplayEmail(!displayEmail);
                  }}
                  checked={displayEmail}
                />

                <Checkbox
                  label="Phone"
                  onChange={() => {
                    setDisplayPhone(!displayPhone);
                  }}
                  checked={displayPhone}
                />

                <Checkbox
                  label="Dob"
                  onChange={() => {
                    setDisplayDob(!displayDob);
                  }}
                  checked={displayDob}
                />

                <Checkbox
                  label="Tasks"
                  onChange={() => {
                    setDisplayTasks(!displayTasks);
                  }}
                  checked={displayTasks}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <Table>
        <Thead>
          <tr>
            {displayName ? <Td>Name</Td> : ""}
            {displayUsername ? <Td>Username</Td> : ""}
            {displayEmail ? <Td>Email Address</Td> : ""}
            {displayPhone ? <Td>Phone Number</Td> : ""}
            {displayDob ? <Td>Date of birth</Td> : ""}
            {displayTasks ? <Td>Tasks</Td> : ""}
          </tr>
        </Thead>

        <Tbody>
          {users.map((user: redditUsers, key: number) => (
            <Tr key={key}>
              {displayName ? (
                <Td className="flex items-center gap-4">
                  <Image
                    src={UserImage}
                    alt=""
                    className="w-[36px] h-[36px] object-cover rounded-full"
                  />{" "}
                  {user.name}
                </Td>
              ) : (
                ""
              )}

              {displayUsername ? <Td>{user.username}</Td> : ""}
              {displayEmail ? <Td>{user.email}</Td> : ""}
              {displayPhone ? <Td>{user.phone}</Td> : ""}
              {displayDob ? <Td>{user.date}</Td> : ""}
              {displayTasks ? <Td>{user.id}</Td> : ""}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <div className="mt-5">
        <Pagination numbers={pagination} />
      </div>
    </>
  );
};

export default RedditUsersTable;
