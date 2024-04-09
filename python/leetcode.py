# 1. TwoSum

class Solution(object):
    def twoSum(self, nums, target):
        n = len(nums)
        for i in range(n-1):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i,j]
        return []
    
result = Solution()
print(result.twoSum([2,5,9,3,1], 14))

# Greatest Candies -- 
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)
        result = []
        for i in range(len(candies)):
            if candies[i] + extraCandies >= maxCandies:
                result.append(True)
            else:
                result.append(False)
        return result