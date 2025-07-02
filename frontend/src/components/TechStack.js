import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

function TechStack() {
  return (
    <Box mb="6">
      <Heading size="md" mb="4">Technologies Used</Heading>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Machine Learning & Data Processing (Python)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList spacing="2">
              <ListItem><b>NumPy & Pandas:</b> Data exploration and manipulation</ListItem>
              <ListItem><b>Scikit-learn:</b> TF-IDF vectorization and Logistic Regression model</ListItem>
              <ListItem><b>NLTK (PorterStemmer):</b> Word stemming to root form</ListItem>
              <ListItem><b>Model Accuracy:</b> Achieved ~80% accuracy on test data</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Backend (Python + Flask)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList spacing="2">
              <ListItem><b>Flask:</b> Lightweight REST API to serve the ML model</ListItem>
              <ListItem><b>Pickle:</b> Model and vectorizer serialization</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Frontend (React + Chakra UI)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList spacing="2">
              <ListItem><b>React:</b> SPA for real-time sentiment prediction</ListItem>
              <ListItem><b>Chakra UI:</b> Accessible and modern component styling</ListItem>
              <ListItem><b>Dark/Light Mode:</b> User toggleable theme support</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Additional Tools
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList spacing="2">
              <ListItem><b>Postman:</b> API testing during development</ListItem>
              <ListItem><b>VS Code & PowerShell:</b> Local dev environment</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default TechStack;
