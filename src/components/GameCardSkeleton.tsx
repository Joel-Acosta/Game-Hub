import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
    return (
        <Card width='300xp' borderRadius={10} overflow='hidden' >
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton