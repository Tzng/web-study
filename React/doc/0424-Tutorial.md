## Tutorial

参考文档：https://react.docschina.org/learn/tutorial-tic-tac-toe

> 在本教程中，您将构建一个小型井字游戏。本教程不假设任何现有的 React 知识。您将在本教程中学习的技术是构建任何 React 应用程序的基础，充分理解它将使您深入了解 React。

将文档中的代码，在 `src/pages/tutorial.tsx` 中实现。

本教程分为几个部分：

- 本教程的设置将为您提供遵循本教程的起点。
- 概述将教你 React 的基础知识：组件、道具和状态。
- 完成游戏将教你 React 开发中最常见的技术。
- 添加时间旅行将使您更深入地了解 React 的独特优势。

## 添加时间旅行

作为最后一个练习，让我们在游戏中创造“回到过去”的可能性。

## 存储移动历史

如果你改变了方块数组，实现时间旅行将会非常困难。

但是，您使用slice()在每次移动之后创建正方形数组的新副本，并将其视为不可变的。这将允许你存储每一个过去版本的方块数组，并在已经发生的回合之间导航。

您将把过去的方块数组存储在另一个名为history的数组中，该数组将作为一个新的状态变量存储。历史数组表示从第一步到最后一步的所有棋盘状态，其形状如下所示:

```
[
  // Before first move
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // ...
  [null, null, null, null, 'X', null, null, null, 'O'],
  [null, null, null, null, 'X', null, null, null, 'O'],
  [null, null, null, null, 'X', null, null, null, 'O'],
]
```

如果你有额外的时间或者想要练习你的新React技能，这里有一些你可以改进井字游戏的想法，按照难度增加的顺序列出:

1 仅对于当前移动，显示“你在移动#…”而不是按钮。
2 重写棋盘，使用两个循环来制作正方形，而不是硬编码它们。
3 添加一个切换按钮，使您可以按升序或降序对移动进行排序。
4 当有人获胜时，突出显示导致获胜的三个方块(当没有人获胜时，显示结果为平局的消息)。
5 移动历史列表中以格式(行，col)显示每次移动的位置。

在本教程中，您已经接触到React的概念，包括元素、组件、道具和状态。既然你已经了解了这些概念在制作游戏时是如何运作的，那么看看Thinking in React，看看同样的React概念在制作应用UI时是如何运作的。

## 本章中存在的问题

问题1：为什么React在更新数组内容的时候，需要复制一个新的数组？

出现的地方：为什么要写const nextSquares = squares.slice();不直接操作squares数组？

```
 function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
```

答案：React 在更新数组内容的时候，需要复制一个新的数组，是因为React采用了"浅比较"的策略来检测状态变化，如果直接修改原始数组，虽然数组的内容发生了变化，但是原始数组的引用并没有发生变化，React 无法检测到数组发生了变化，从而不会触发组件的重新渲染。

通过复制一个新的数组，我们可以在新的数组上进行操作，从而确保原始数组的引用没有改变，当React比较新旧状态的时候，会检测到新数组和旧数组不是同一个引用，从而触发组件的重新渲染。

另外，使用不可变的数据结构（如使用数组slice、concat、spread等方法复制新的数组），也有助于避免副作用和脏数据的发生，提高代码的可维护性和稳定性。

问题2：如何避免无意义的重新渲染？

示例代码：

```
const Square = memo(function Square2({value, onSquareClick}) {
    console.log('Square - 渲染了')
    return <button onClick={onSquareClick} className="square">{value}</button>
})
```

memo允许您在组件的道具不变时跳过重新渲染组件。