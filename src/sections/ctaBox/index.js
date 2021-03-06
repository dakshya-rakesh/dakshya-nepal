import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"

export default ({ marginBottom }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box pad={mobile ? { top: "64px" } : { top: "90px" }}>
      <Box
        pad={mobile ? { horizontal: "16px" } : { horizontal: "131.5px" }}
        margin={
          marginBottom
            ? mobile
              ? { bottom: "70px" }
              : { bottom: "90px" }
            : "0px"
        }
      >
        <Heading code={2} size="medium">
          Interested in educating Nepal?
        </Heading>
        <Box
          margin={mobile ? { top: "32px" } : { top: "48px" }}
          direction={mobile ? "column" : "row"}
          border={{ size: "2px", color: "w2" }}
          round="4px"
          gap="medium"
        >
          <Box
            background="p1-l"
            pad={{ top: "large", left: "small", right: "xsmall" }}
            round={{ corner: "left", size: "4px" }}
          >
            <Image src="/illustrations/Careers.svg" />
          </Box>
          <Box
            alignSelf="center"
            gap="small"
            pad={mobile ? { horizontal: "16px", bottom: "16px" } : null}
            width={mobile ? "100%" : "large"}
          >
            <Heading level={3}>Join our mission</Heading>
            <Box width={mobile ? "100%" : "80%"}>
              <Text code="subtext-r" color="b2" size="small">
                If you are willing to digitize Nepal and become a part of the
                largest digital educator, join us in changing the education
                system for being recognized as the global leader in education.
              </Text>
            </Box>
            <Box direction={mobile ? "column" : "row"} gap="small">
              <Button primary label="explore careers" />
              <Button secondary label="Join as consultant" />
              <Button secondary label="Join as online tutor" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
